import React, { useState, useCallback } from 'react';
import { FamilyMember } from '../types';
import TreeNode from '../components/TreeNode';
import { useToast } from '../context/ToastContext';
import EmptyState from '../components/EmptyState';

// Represents a new family. In a real app, this would come from a database and could be null.
const initialFamilyData: FamilyMember | null = null;

// Recursive helper to add a new member
const addNode = (node: FamilyMember, parentId: number, newNode: FamilyMember): FamilyMember => {
    if (node.id === parentId) {
        return { ...node, children: [...(node.children || []), newNode] };
    }
    if (node.children) {
        return { ...node, children: node.children.map(child => addNode(child, parentId, newNode)) };
    }
    return node;
};

// Recursive helper to update an existing member
const updateNode = (node: FamilyMember, memberId: number, name: string, spouse?: string): FamilyMember => {
    if (node.id === memberId) {
        return { ...node, name, spouse };
    }
    if (node.children) {
        return { ...node, children: node.children.map(child => updateNode(child, memberId, name, spouse)) };
    }
    return node;
};

// Recursive helper to delete a member
const deleteNode = (node: FamilyMember, memberId: number): FamilyMember | null => {
    if (node.children) {
        const updatedChildren = node.children
            .filter(child => child.id !== memberId)
            .map(child => deleteNode(child, memberId))
            .filter((child): child is FamilyMember => child !== null); // Type guard to remove nulls
        return { ...node, children: updatedChildren };
    }
    return node;
};


const FamilyTreePage: React.FC = () => {
    const [familyData, setFamilyData] = useState<FamilyMember | null>(initialFamilyData);
    const { showToast } = useToast();

    const handleStartTree = () => {
        const name = prompt("Enter the name of the first family member (e.g., a grandparent):");
        if (name) {
            const spouse = prompt("(Optional) Enter their spouse's name:");
            const newRoot: FamilyMember = {
                id: Date.now(),
                name,
                spouse: spouse || undefined,
                children: []
            };
            setFamilyData(newRoot);
            showToast(`Welcome, ${name}! Your family tree has begun.`, 'success');
        }
    };

    const handleAddChild = useCallback((parentId: number) => {
        const name = prompt("Enter the new member's name:");
        if (name) {
            const spouse = prompt("(Optional) Enter spouse's name:");
            const newMember: FamilyMember = {
                id: Date.now(),
                name,
                spouse: spouse || undefined,
            };
            setFamilyData(currentTree => {
                if (!currentTree) return null;
                return addNode(currentTree, parentId, newMember)
            });
        }
    }, []);
    
    const handleUpdateMember = useCallback((memberId: number, currentName: string, currentSpouse?: string) => {
        const name = prompt("Enter the updated name:", currentName);
        if (name) {
            const spouse = prompt("(Optional) Enter updated spouse's name:", currentSpouse);
            setFamilyData(currentTree => {
                if (!currentTree) return null;
                return updateNode(currentTree, memberId, name, spouse || undefined);
            });
        }
    }, []);

    const handleDeleteMember = useCallback((memberId: number, memberName: string) => {
        if (!familyData) return;

        if (memberId === familyData.id) {
            if (window.confirm(`Are you sure you want to delete the entire family tree starting with ${memberName}? This action cannot be undone.`)) {
                setFamilyData(null);
                showToast("Family tree has been cleared.", "info");
            }
            return;
        }
        if (window.confirm(`Are you sure you want to delete ${memberName}? This action cannot be undone.`)) {
             setFamilyData(currentTree => {
                if (!currentTree) return null;
                const newTree = deleteNode(currentTree, memberId);
                return newTree!;
            });
        }
    }, [familyData, showToast]);
    
    if (!familyData) {
        return (
            <EmptyState
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.17 48.17 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>
                }
                title="Your Family Tree Awaits"
                message="Map out your family's legacy, from its roots to its newest branches. Add your first member to begin."
                action={{
                    text: 'Start Building Tree',
                    onClick: handleStartTree,
                }}
            />
        );
    }

    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold text-text mb-4">Our Family Roots</h1>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
                Explore and grow your family tree. Hover over a member to add, edit, or remove entries. Use the arrow icons to expand or collapse branches.
            </p>
            <div className="overflow-x-auto pb-8">
                <div className="inline-block min-w-full py-4">
                    <div className="family-tree">
                        <ul>
                            <TreeNode 
                                member={familyData} 
                                onAddChild={handleAddChild}
                                onUpdateMember={handleUpdateMember}
                                onDeleteMember={handleDeleteMember}
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FamilyTreePage;

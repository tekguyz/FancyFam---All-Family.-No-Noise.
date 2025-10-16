import React, { useState, useCallback } from 'react';
import { FamilyMember } from '../types';
import TreeNode from '../components/TreeNode';
import { useToast } from '../context/ToastContext';

const initialFamilyData: FamilyMember = {
  id: 1,
  name: 'Ricardo',
  spouse: 'Elena',
  children: [
    {
      id: 2,
      name: 'Javier',
      spouse: 'María',
      children: [
        { id: 4, name: 'Roberto', spouse: 'Linda' },
        { id: 5, name: 'Patricia' },
      ],
    },
    {
      id: 3,
      name: 'Susana',
      spouse: 'Miguel',
      children: [
        { id: 6, name: 'Jennifer', spouse: 'William' },
        { id: 7, name: 'David' },
        { id: 8, name: 'Elizabeth' },
      ],
    },
     {
      id: 9,
      name: 'Tomás',
      spouse: 'Sara',
    },
  ],
};

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
    const [familyData, setFamilyData] = useState<FamilyMember>(initialFamilyData);
    const { showToast } = useToast();

    const handleAddChild = useCallback((parentId: number) => {
        const name = prompt("Enter the new member's name:");
        if (name) {
            const spouse = prompt("(Optional) Enter spouse's name:");
            const newMember: FamilyMember = {
                id: Date.now(),
                name,
                spouse: spouse || undefined,
            };
            setFamilyData(currentTree => addNode(currentTree, parentId, newMember));
        }
    }, []);
    
    const handleUpdateMember = useCallback((memberId: number, currentName: string, currentSpouse?: string) => {
        const name = prompt("Enter the updated name:", currentName);
        if (name) {
            const spouse = prompt("(Optional) Enter updated spouse's name:", currentSpouse);
            setFamilyData(currentTree => updateNode(currentTree, memberId, name, spouse || undefined));
        }
    }, []);

    const handleDeleteMember = useCallback((memberId: number, memberName: string) => {
        if (memberId === familyData.id) {
            showToast("Cannot delete the root of the family tree.", 'error');
            return;
        }
        if (window.confirm(`Are you sure you want to delete ${memberName}? This action cannot be undone.`)) {
             setFamilyData(currentTree => {
                const newTree = deleteNode(currentTree, memberId);
                return newTree!; // The root will not be deleted, so it won't be null
            });
        }
    }, [familyData.id, showToast]);

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
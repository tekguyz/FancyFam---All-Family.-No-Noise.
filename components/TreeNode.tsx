import React, { useState } from 'react';
import { FamilyMember } from '../types';
import FamilyMemberNode from './FamilyMemberNode';

interface TreeNodeProps {
    member: FamilyMember;
    onAddChild: (parentId: number) => void;
    onUpdateMember: (memberId: number, currentName: string, currentSpouse?: string) => void;
    onDeleteMember: (memberId: number, memberName: string) => void;
}

const TreeNode: React.FC<TreeNodeProps> = ({ member, onAddChild, onUpdateMember, onDeleteMember }) => {
    const [isExpanded, setIsExpanded] = useState(true);
    const hasChildren = member.children && member.children.length > 0;

    const handleToggleExpand = () => {
        if (hasChildren) {
            setIsExpanded(!isExpanded);
        }
    };

    return (
        <li>
            <FamilyMemberNode 
                member={member} 
                hasChildren={hasChildren}
                isExpanded={isExpanded}
                onToggleExpand={handleToggleExpand}
                onAddChild={() => onAddChild(member.id)}
                onEdit={() => onUpdateMember(member.id, member.name, member.spouse)}
                onDelete={() => onDeleteMember(member.id, member.name)}
            />
            {hasChildren && (
                <ul 
                    className="transition-all duration-500 ease-in-out"
                    style={{
                        maxHeight: isExpanded ? '1000px' : '0',
                        opacity: isExpanded ? 1 : 0,
                        overflow: 'hidden'
                    }}
                >
                    {member.children!.map(child => (
                        <TreeNode 
                            key={child.id} 
                            member={child} 
                            onAddChild={onAddChild}
                            onUpdateMember={onUpdateMember}
                            onDeleteMember={onDeleteMember}
                        />
                    ))}
                </ul>
            )}
        </li>
    );
};

export default TreeNode;
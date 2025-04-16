import React from "react";

const StaffPanel = ({ staffMembers }) => {
  const handleDragStart = (e, staff) => {
    e.dataTransfer.setData("staffId", staff.id);
  };

  return (
    <div className="w-1/4 bg-purple-50 rounded-lg shadow">
      <div className="p-4 sticky top-4">
        <h3 className="font-semibold text-lg mb-4 text-center">担当者リスト</h3>
        <div className="space-y-3">
          {staffMembers.map((staff) => (
            <div
              key={staff.id}
              className={`${staff.color} border border-gray-200 rounded-lg p-3 shadow-sm cursor-grab hover:shadow-md transition-shadow`}
              draggable="true"
              onDragStart={(e) => handleDragStart(e, staff)}
            >
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-700 font-bold mr-3 border border-gray-300">
                  {staff.name.charAt(0)}
                </div>
                <span>{staff.name}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-sm text-gray-500 text-center">
          ※担当者をドラッグして、スロットにドロップしてください。
        </div>
      </div>
    </div>
  );
};

export default StaffPanel;

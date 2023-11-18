import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react"; // Assuming you have imported the X icon

interface DergesatProps {
  isOpen: boolean;
  onClose: () => void;
}

const Dergesat: React.FC<DergesatProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} as="div" className="fixed inset-0 overflow-y-auto" onClose={onClose}>
      <div className="flex items-center justify-center min-h-screen">
        {/* Background color and opacity */}
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />

        {/* Dialog content */}
        <div className="relative z-50 bg-white p-4 rounded-md shadow-xl">
          {/* Close button */}
          <div className="absolute top-0 right-0 p-2">
            <button onClick={onClose}>
              <X size={15} />
            </button>
          </div>

          {/* Your dialog content goes here */}
          <p>Dialog Content</p>
        </div>
      </div>
    </Dialog>
  );
};

export default Dergesat;
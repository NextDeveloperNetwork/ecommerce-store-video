import { useClerk } from "@clerk/nextjs";
import { FiLogOut } from "react-icons/fi";
const LogoutButton = () => {
  const { signOut } = useClerk();

  const handleLogout = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
  <button
    onClick={handleLogout}
    style={{ display: 'flex', alignItems: 'center', backgroundColor: 'transparent', border: 'none', color: 'gray', marginRight: '10px' }}
  >
    <span style={{ marginRight: '5px' }}>Logout</span>
    <FiLogOut />
  </button>
</div>
    
  );
};

export default LogoutButton;
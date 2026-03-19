// I could do export const AdminPage, but you'd be forced to use named imports
//   import { AdminPage } from '@/pages/AdminPage';

const AdminPage = () => {
  return (
    <h1>Admin Page</h1>
  );
};

export default AdminPage

// you *can* export default someFunction() {}   (i.e. not arrow functions)
// but I'm always trying to show you multiple ways of doing things, so today
// our inline page components are arrow functions.
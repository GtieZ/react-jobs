import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider
} from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';
import HomePage from './pages/HomePage';
import JobsPage from './layouts/JobsPage';1
import JobPage, { jobLoader } from './pages/JobPage';
import NotFoundPage from './pages/NotFoundPage';





const App = () => {

  //Add New Job Call
  const addJob = async (newJob) => {
    const resp = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'appliacation/json'
      },
      body: JSON.stringify(newJob)
    });

    return;
  };

  //Update Job Call
  const updateJob = async (job) => {
    const resp = await fetch('/api/jobs/' + job.id, {
      method: 'PUT',
      headers: {},
      body: JSON.stringify(job)
    });

    return;
  };

  //Delete Job Call
  const deleteJob = async (id) => {
    const resp = await fetch('/api/jobs/' + id, {
      method: 'DELETE',
    });
  };



  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="/jobs" element={<JobsPage/>}/>
        <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader}/>
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob}/>}/>
        <Route path="/jobs/edit/:id" element={<EditJobPage updateJobSubmit={updateJob}/>} loader={jobLoader}/>

        <Route path="*" element={<NotFoundPage/>}/>
      </Route>
    )
  );

  return ( <RouterProvider router={router}/> );
}

export default App

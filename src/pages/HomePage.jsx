import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobsListings from '../components/JobsListings';
import ViewAllJobs from '../components/ViewAllJobs';

const HomePage = () => {
    return (
        <>
            <Hero title="test title" subtitle="this is the subtitle"/>
            <HomeCards />
            <JobsListings isHome={true} />
            <ViewAllJobs />
        </>
    )
}

export default HomePage;
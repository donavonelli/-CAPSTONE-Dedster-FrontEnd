import React from 'react';
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Userbar from '../../components/Navbar/Userbar'
import Footer from '../../components/Footer/Footer'
import Colleges from '../../components/Colleges/Colleges'
import useColleges from '../../hooks/Colleges/useColleges';



function CollegesPage(props) {
    const [colleges, fetchColleges] = useColleges();
    return (
            <div>
                <Header /> 
                <Userbar />
                <Navbar />
                <h4>Colleges</h4>
      {colleges.length ? <Colleges data={colleges} /> : <h1>Loading Colleges</h1>}
                <Footer />
            </div>
        )
    
}


export default CollegesPage;
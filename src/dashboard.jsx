import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import './dash.css';

const Dashboard = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'contacts'));
        const formData = querySnapshot.docs.map(doc => doc.data());
        setSubmissions(formData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching form data: ', error);
      }
    };

    fetchSubmissions();
  }, []);

  // Filter the table based on search input
  const filteredSubmissions = submissions.filter(submission =>
    (submission.name && submission.name.toLowerCase().includes(search.toLowerCase())) ||
    (submission.email && submission.email.toLowerCase().includes(search.toLowerCase())) ||
    (submission.message && submission.message.toLowerCase().includes(search.toLowerCase()))
  );
  

  return (
    <div className="container">
      <h1>Form Submissions Dashboard</h1>
      <p>{submissions.length}</p>
 

      {/* Search input */}
      <input
        className="search-bar"
        type="text"
        placeholder="Search Submissions"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Number</th>
                <th>ACM ID</th>
                <th>Semster</th>
                <th>Class & Div</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {filteredSubmissions.map((submission, index) => (
                <tr key={index}>
                  <td>{submission.name}</td>
                  <td>{submission.email}</td>
                  <td>{submission.number}</td>
                  <td>{submission.id}</td>
                  <td>{submission.sem}</td>
                  <td>{submission.div}</td>
                  <td>{new Date(submission.timestamp.seconds * 1000).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

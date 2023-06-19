'use client'
import React, { useState } from "react";
import styles from "../styles/table.module.css"
const Table = () => {
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data for the table
  const data = [
    { name: "John Doe", age: 25, location: "New York" },
    { name: "Jane Smith", age: 32, location: "London" },
    { name: "Alice Johnson", age: 28, location: "San Francisco" },
    { name: "John Doe", age: 25, location: "New York" },
    { name: "Jane Smith", age: 32, location: "London" },
    { name: "Alice Johnson", age: 28, location: "San Francisco" },
    { name: "Michael Brown", age: 41, location: "Chicago" },
    { name: "Emily Davis", age: 27, location: "Paris" },
    { name: "Daniel Wilson", age: 35, location: "Sydney" },
    { name: "Olivia Miller", age: 29, location: "Toronto" },
    { name: "William Taylor", age: 37, location: "Berlin" },
    { name: "Sophia Anderson", age: 31, location: "Tokyo" },
    { name: "Matthew Thomas", age: 44, location: "Los Angeles" },
    { name: "Ava White", age: 26, location: "Madrid" },
    { name: "James Martinez", age: 33, location: "Rome" },
    { name: "Isabella Johnson", age: 28, location: "Barcelona" },
    { name: "Benjamin Garcia", age: 39, location: "Amsterdam" },
    { name: "Mia Robinson", age: 30, location: "Seoul" },
    { name: "Ethan Lewis", age: 36, location: "Mumbai" },
    { name: "Charlotte Lee", age: 23, location: "Singapore" },
    { name: "Alexander Hall", age: 43, location: "Rio de Janeiro" },
    { name: "Amelia Young", age: 34, location: "Cape Town" },
    { name: "Daniel Thompson", age: 27, location: "Moscow" },
  ];

  // Filter data based on search query
  const filteredData = data.filter((entry) =>
    Object.values(entry).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // Function to handle changing entries per page
  const handleEntriesPerPageChange = (e) => {
    setEntriesPerPage(parseInt(e.target.value));
  };

  // Function to handle search input change
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className={styles.alltable}>
      <div>
        <div className={styles.entriesPerpage}>
          <span>Show entries per page:</span>
          <select value={entriesPerPage} onChange={handleEntriesPerPageChange}>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>
        <div className={styles.searchbar}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
        </div>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.slice(0, entriesPerPage).map((entry, index) => (
            <tr key={index}>
              <td>{entry.name}</td>
              <td>{entry.age}</td>
              <td>{entry.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

import React, { useState, useEffect } from 'react';
import UserRepos from './UserRepos';
import Spinner from './Spinner';



function UserCard({ query }) {
  const [users, setUsers] = useState([]);
  const [repos, setRepos] = useState([]);
  const [loadingRepos, setLoadingRepos] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.github.com/search/users?q=${query}`);
      const data = await response.json();
      setUsers(data.items);
    };

    fetchData();
  }, [query]);

  const getRepos = async (user) => {

    setLoadingRepos(true)
    const response = await fetch(`https://api.github.com/users/${user.login}/repos`);
    const data = await response.json();
    const slicedData = data.slice(0, 5);
    console.log(repos);
    setRepos(slicedData);
    setLoadingRepos(false)

  };

  return (
    <>
      {users.length > 0 ? (
        users.map((user) => (
          <div key={user.id}>
            {/* Modal start*/}
            <label htmlFor={`my-modal-${user.id}`} className="card w-30 bg-base-100 mr-10 mb-5 ml-10 shadow-xl hover:bg-base-300" onClick={() => { getRepos(user) }}>
              <div className="card-body">
                <div className="avatar">
                  <div className="w-24 rounded">
                    <img src={user.avatar_url} alt={user.login} />
                  </div>
                </div>
                <h2 className="card-title text-sm max-w-prose">{user.login}</h2>

              </div>
            </label>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id={`my-modal-${user.id}`} className="modal-toggle" />
            <label htmlFor={`my-modal-${user.id}`} className="modal cursor-pointer">
              <label className="modal-box relative flex flex-wrap">
                <img src={user.avatar_url} alt={user.login} className='avatar w-36 rounded' />
                <h1 className='text-2xl ml-20 mt-5 font-bold'>{user.login}</h1>
                <a href={user.html_url} target='_blank' className='h-min w-m'>
                  <span className='badge badge-primary absolute ml-14 mt-7'>Github</span>
                </a>
                <div className="alert alert-info shadow-lg mt-10 mb-5">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>Showing 5 repos from user.</span>
                  </div>
                </div>
                {/*Show repos */}
                {loadingRepos ? <Spinner /> : <UserRepos repos={repos} />}
              </label>
            </label>
          </div>
        ))
      ) : (
        <p>No users found.</p>
      )}
    </>
  );
}

export default UserCard;

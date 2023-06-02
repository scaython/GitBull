import React from 'react'

function UserDetails({repos}) {
  return (
    <div>
          {repos.length > 0 ? (
                            <div className="overflow-x-auto">
                                <table className="table table-zebra w-full">
                                    {/* head */}
                                    <thead>
                                        <tr>
                          <th></th>
                          <th>Name</th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        
                        {repos.map((repo, index) => (
                          <tr key={repo.id}>
                            <th>{index + 1}</th>
                            <td>{repo.name}</td>
                            <td>{repo.description}</td>
                          </tr>
                        ))}
                      </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="alert alert-error shadow-lg">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span>No repos found</span>
                                </div>
                            </div>
                        )}
    </div>
  )
}

export default UserDetails
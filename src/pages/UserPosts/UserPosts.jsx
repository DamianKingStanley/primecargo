import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UserPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedPostId, setExpandedPostId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `https://tracking-server-d6l5.onrender.com/posts/${userId}`
        );
        setPosts(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch posts");
        setLoading(false);
      }
    };
    fetchPosts();
  }, [userId]);

  const toggleDetails = (postId) => {
    setExpandedPostId(expandedPostId === postId ? null : postId);
  };

  const handleDelete = async () => {
    const userData = JSON.parse(localStorage.getItem("userInformation"));

    const getUserToken = userData?.token;

    try {
      await axios.delete(
        `https://tracking-server-d6l5.onrender.com/posts/edit/${postToDelete}`,
        {
          headers: {
            Authorization: `Bearer ${getUserToken}`,
          },
        }
      );
      setPosts(posts.filter((post) => post._id !== postToDelete));
      setShowDeleteModal(false);
      setPostToDelete(null);
    } catch (error) {
      console.error("Failed to delete post", error);
    }
  };

  const handleEdit = (post) => {
    navigate(`/edit-post/${post._id}`); // Navigate to the edit page with post ID
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-500"></div>
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-4">Packages</h2>
      {posts.length === 0 ? (
        <p className="text-center text-gray-500">
          No posts found for this user.
        </p>
      ) : (
        <ul className="space-y-4">
          {posts.map((post) => (
            <div
              key={post._id}
              className="border border-gray-300 rounded-lg p-4 shadow-md relative"
            >
              <div
                className="cursor-pointer text-lg font-semibold text-blue-600 hover:text-orange-600"
                onClick={() => toggleDetails(post._id)}
              >
                {post.parcelHolder}
              </div>

              <div className="absolute top-4 right-4">
                <p
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  onClick={() => {
                    if (expandedPostId === post._id) {
                      setExpandedPostId(null);
                    } else {
                      setExpandedPostId(post._id);
                    }
                  }}
                >
                  &#8942;
                </p>
                {expandedPostId === post._id && (
                  <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded shadow-lg">
                    <button
                      className="block px-4 py-2 text-sm text-red-500 hover:bg-gray-100 w-full text-left"
                      onClick={() => {
                        setShowDeleteModal(true);
                        setPostToDelete(post._id);
                      }}
                    >
                      Delete
                    </button>
                    <button
                      className="block px-4 py-2 text-sm text-blue-500 hover:bg-gray-100 w-full text-left"
                      onClick={() => handleEdit(post)}
                    >
                      Edit
                    </button>
                  </div>
                )}
              </div>

              {expandedPostId === post._id && (
                <div className="mt-4 text-gray-700">
                  <p className="p-2 mb-1 bg-gray-100 rounded hover:bg-orange-600 hover:text-white transition">
                    <strong>Code:</strong> {post.code}
                  </p>
                  <p className="p-2 mb-1 bg-gray-100 rounded hover:bg-orange-600 hover:text-white transition">
                    <strong>Current Location:</strong> {post.currentLocation}
                  </p>
                  <p className="p-2 mb-1 bg-gray-100 rounded hover:bg-orange-600 hover:text-white transition">
                    <strong>Take-Off Location:</strong> {post.takeOffLocation}
                  </p>
                  <p className="p-2 mb-1 bg-gray-100 rounded hover:bg-orange-600 hover:text-white transition">
                    <strong>Destination:</strong> {post.destination}
                  </p>
                  <p className="p-2 mb-1 bg-gray-100 rounded hover:bg-orange-600 hover:text-white transition">
                    <strong>Arrival Date:</strong>{" "}
                    {new Date(post.arrivalDate).toLocaleDateString()}
                  </p>
                  <p className="p-2 mb-1 bg-gray-100 rounded hover:bg-orange-600 hover:text-white transition">
                    <strong>Cargo Category:</strong> {post.cargoCategory}
                  </p>
                  <p className="p-2 mb-1 bg-gray-100 rounded hover:bg-orange-600 hover:text-white transition">
                    <strong>Date of Quote:</strong>{" "}
                    {new Date(post.dateOfQuote).toLocaleDateString()}
                  </p>
                  <p className="p-2 mb-1 bg-gray-100 rounded hover:bg-orange-600 hover:text-white transition">
                    <strong>Location:</strong> {post.location}
                  </p>
                  <p className="p-2 mb-1 bg-gray-100 rounded hover:bg-orange-600 hover:text-white transition">
                    <strong>Status:</strong> {post.status}
                  </p>
                </div>
              )}
            </div>
          ))}
        </ul>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-lg font-bold mb-4">Confirm Delete</h3>
            <p>Are you sure you want to delete this?</p>
            <div className="mt-4 flex justify-end space-x-4">
              <button
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserPosts;

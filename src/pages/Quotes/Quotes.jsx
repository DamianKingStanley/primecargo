import React, { useState, useEffect } from "react";
import { FaSearch, FaSpinner, FaTrash } from "react-icons/fa";
import { FiPackage, FiGlobe, FiCalendar, FiUser } from "react-icons/fi";

const UserQuotes = ({ loggedId, adminMode = false }) => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const userData = JSON.parse(localStorage.getItem("userInformation"));
        const endpoint = adminMode
          ? "https://server.vastseacarrier.com/get-quote"
          : `https://server.vastseacarrier.com/getuser-quote/${
              loggedId || userData?.result?.id
            }`;

        const response = await fetch(endpoint, {
          headers: {
            Authorization: `Bearer ${userData.token}`,
          },
        });

        const data = await response.json();
        if (response.ok) {
          setQuotes(data.data); // ✅ Fix here
        } else {
          console.error("Failed to fetch quotes:", data);
        }
      } catch (error) {
        console.error("Error fetching quotes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuotes();
  }, [loggedId, adminMode]);

  const filteredQuotes = quotes.filter((quote) => {
    const matchesSearch =
      quote.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quote.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === "all" || quote.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  // const handleViewQuote = (quoteId) => {
  //   console.log("View quote:", quoteId);
  // };

  const handleDeleteQuote = async (quoteId) => {
    if (!window.confirm("Are you sure you want to delete this quote?")) return;

    try {
      const userData = JSON.parse(localStorage.getItem("userInformation"));
      const response = await fetch(
        `https://server.vastseacarrier.com/quote/${quoteId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${userData.token}`,
          },
        }
      );

      if (response.ok) {
        setQuotes(quotes.filter((quote) => quote._id !== quoteId));
      } else {
        console.error("Failed to delete quote");
      }
    } catch (error) {
      console.error("Error deleting quote:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center p-12">
        <FaSpinner className="animate-spin text-blue-500 text-2xl" />
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        <h2 className="text-xl font-semibold text-gray-800">
          {adminMode ? "All Quote Requests" : "My Quote Requests"}
          {/* {!adminMode && "My Quote Requests"} */}
        </h2>

        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
          <div className="relative flex-grow max-w-xs">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search quotes..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select
            className="block w-full sm:w-40 pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="completed">Completed</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>

      {filteredQuotes.length === 0 ? (
        <div className="text-center py-12">
          <div className="mx-auto h-24 w-24 text-gray-400 mb-4">
            <FiPackage className="w-full h-full" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">
            No quotes found
          </h3>
          <p className="text-gray-500">
            {searchTerm
              ? "No quotes match your search criteria"
              : adminMode
              ? "There are no quote requests yet"
              : "You haven't requested any quotes yet"}
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {adminMode && (
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    User
                  </th>
                )}
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Service
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Route
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Date
                </th>

                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredQuotes.map((quote) => (
                <tr key={quote._id} className="hover:bg-gray-50">
                  {adminMode && (
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <FiUser className="text-blue-600" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {quote.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {quote.email}
                          </div>
                        </div>
                      </div>
                    </td>
                  )}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {Object.entries(quote.services)
                        .filter(([_, value]) => value)
                        .map(([key]) => (
                          <span
                            key={key}
                            className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-1 mb-1 capitalize"
                          >
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </span>
                        ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <FiGlobe className="text-gray-400 mr-2" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {quote.countryOfOrigin} → {quote.destinationCountry}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <FiCalendar className="text-gray-400 mr-2" />
                      <div className="text-sm text-gray-500">
                        {new Date(quote.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    {/* <button
                      onClick={() => handleViewQuote(quote._id)}
                      className="text-blue-600 hover:text-blue-900 mr-4"
                    >
                      <FaEye className="inline mr-1" /> View
                    </button> */}
                    <button
                      onClick={() => handleDeleteQuote(quote._id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <FaTrash className="inline mr-1" /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserQuotes;

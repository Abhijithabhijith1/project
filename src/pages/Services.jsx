import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../index.css'; // Import the CSS

const Services = () => {

   // Share functionality
   const handleShare = (title, description, url) => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: description,
        url: url,
      }).catch((error) => console.error("Error sharing:", error));
    } else {
      alert("Share not supported on this browser.");
    }
  };

  // Copy link functionality
  const handleCopyLink = (url) => {
    navigator.clipboard.writeText(url)
      .then(() => alert("Link copied to clipboard!"))
      .catch((error) => console.error("Error copying link:", error));
  };

  // Copy text functionality
  const handleCopyText = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => alert("Text copied to clipboard!"))
      .catch((error) => console.error("Error copying text:", error));
  };

  // Bookmark functionality
  const handleBookmark = (title, description, url) => {
    const bookmark = { title, description, url };
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    bookmarks.push(bookmark);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    alert("Bookmarked successfully!");
  };

// Read more functionality
const handleReadMore = (url) => {
  window.open(url, "_blank"); // Open in a new tab
};

  return (
    <>
      {/* Header Section */}
      <Header selectedPage="services" />

      {/* Page Title */}
      <h1 className="page-title">Services</h1>

      {/* Content Section */}
      <div className="content">
        <div className="post-list">
          {/* Service 1 */}
          <div className="post-item">
            <h3>E-Grantz 2.0: A Web-Based Grant Distribution System</h3>
            <div className="info">
              <h5>08 Jan 2025</h5>
              <h5>|</h5>
              <h5>Education, Technology</h5>
            </div>
            <p>
            E-Grantz 2.0 serves as an efficient, web-based solution for the timely disbursement of educational assistance to post-matric students from the fishing community. This platform streamlines the process of application, verification, and sanctioning of grants, ensuring accessibility and transparency. Its intuitive design simplifies the online application process while catering to the specific needs of beneficiaries, making it a pivotal tool for empowering education.
            </p>
             <div className="buttons">
              <i className="bx bx-share" onClick={() => handleShare("E-Grantz 2.0", "A web-based grant distribution system for education", window.location.href)}></i>
              <i className="bx bx-link-alt" onClick={() => handleCopyLink(window.location.href)}></i>
              <i className="bx bx-copy" onClick={() => handleCopyText("E-Grantz 2.0 serves as an efficient, web-based solution...")}></i>
              <i className="bx bx-bookmark-plus" onClick={() => handleBookmark("E-Grantz 2.0", "A web-based grant distribution system for education", window.location.href)}></i>
              <button onClick={() => handleReadMore("https://scholarship.fisheries.kerala.gov.in/Settings/index")}>Read More</button>
              </div>
          </div>

          
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default Services;

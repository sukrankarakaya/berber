import React from 'react';
import Navbar from './Navbar';
import Comment from './Comment';
import Footer from '../Footer';

const Appointment = () => {
  // Yorumları içeren bir dizi
  const comments = [
    { id: 1, text: "Comment 1" },
    { id: 2, text: "Comment 2" },
    { id: 3, text: "Comment 3" },
    { id: 4, text: "Comment 4" },
    { id: 5, text: "Comment 5" },
    { id: 6, text: "Comment 6" }
  ];

  return (
    <div>
      <Navbar />
      <div style={{ maxWidth: '1200px', margin: '90px auto', padding: '0 20px' }}>
        {/* Yorumları ekrana yazdır */}
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {comments.map((comment) => (
            <div key={comment.id} style={{ flexBasis: 'calc(33.33% - 20px)', margin: '10px' }}>
              <Comment text={comment.text} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Appointment;

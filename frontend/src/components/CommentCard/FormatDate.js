const FormatDate = (timestamp) => {
   
        const currentDate = new Date();
        const commentDate = new Date(timestamp);
        const timeDifference = currentDate - commentDate;
        const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hoursAgo =  Math.floor(timeDifference / (1000 * 60 * 60));
        const minAgo =  Math.floor(timeDifference / (1000 * 60));
        if(daysAgo==0)
        {
          if(hoursAgo==0)
          {
            if(minAgo==0)
            {
              return "Just now";
            }
            return `${minAgo} min ago`;
          }
          return `${hoursAgo} hours ago`;
        }
        else
        {
        return `${daysAgo} days ago`;
        }
  
};

export default FormatDate;

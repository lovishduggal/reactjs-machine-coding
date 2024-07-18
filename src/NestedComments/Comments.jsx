/* eslint-disable react/prop-types */
const data = [
  {
    userName: 'Lovish Duggal',
    comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit',
    replies: [
      {
        userName: 'Tania Duggal',
        comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit',
      },
    ],
  },
  {
    userName: 'Lovish Duggal',
    comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit',
    replies: [
      {
        userName: 'Tania Duggal',
        comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit',
        replies: [
          {
            userName: 'Tania Duggal',
            comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit',
            replies: [
              {
                userName: 'Tania Duggal',
                comment:
                  'Lorem ipsum dolor sit amet consectetur, adipisicing elit',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    userName: 'Tania Duggal',
    comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit',
  },
];

const Comment = ({ item }) => {
  return item.map((comment, index) => {
    return (
      <div
        key={index}
        className=" pl-2 ml-8 border-l-2 rounded-lg
       border-black"
      >
        <div className="flex items-center">
          <div className="mr-4 ">
            <img
              className="w-10 h-10 rounded-full"
              src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
              alt="user"
            />
          </div>
          <div>
            <h5>{comment.userName}</h5>
            <p>{comment.comment}</p>
          </div>
        </div>
        {/* Nested Comments */}
        <div>{comment?.replies && <Comment item={comment?.replies} />}</div>
      </div>
    );
  });
};

const Comments = () => {
  return <Comment item={data} />;
};

export default Comments;

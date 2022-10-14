# social-network-api

### Users

- Find All Users
  - ./api/users
- Find Single User
  - ./api/users/:id
- Create
  - ./api/users
    {"username":, "email":}
- Update
  - ./api/users/:id
- Delete
  - ./api/users/:id

### Friends

- Add Friend
  - ./api/users/user:id/friends/friend:id
- Delete
  - ./api/users/friend:id

### Thoughts

- Find All Thoughts
  - ./api/thoughts
- Find Single Thought
  - ./api/thoughts/:id
- Create
  - ./api/thoughts
    {"thoughtText":, "username":}
- Update
  - ./api/thoughts/:thought_id
- Delete
  - ./api/thoughts/:id from user's 'thoughts' field id

### Reactions

- Create
  - ./api/thoughts/thought_id/reactions
    {"thoughtText":, "username":}
- Update
  - ./api/thoughts/thought_id/reactions/reaction_id
- Delete
  - ./api/thoughts/thought_id/reactions/reaction_id

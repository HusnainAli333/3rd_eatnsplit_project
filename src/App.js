const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        <FormAddFriend />
        <Button>Add Friend</Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

function FriendsList() {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((value) => {
        return <Friends value={value} key={value.id} />;
      })}
    </ul>
  );
}
function Friends({ value }) {
  return (
    <li>
      <img src={value.image} alt={value.name} />
      <h3>{value.name}</h3>
      {value.balance < 0 ? (
        <p className="red">
          You owe {value.name} {Math.abs(value.balance)}$
        </p>
      ) : value.balance > 0 ? (
        <p className="green">
          {value.name} owes You {value.balance}$
        </p>
      ) : (
        <p>You and {value.name} are even </p>
      )}
      <Button>Select</Button>
    </li>
  );
}
function Button({ children }) {
  return <button className="button">{children} </button>;
}
function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label>🙎🏻‍♀️Friend name </label>
      <input type="text" />
      <label> 🏁 Image url</label>
      <input type="text" />
      <Button>ADD</Button>
    </form>
  );
}
function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>split a bill with X</h2>

      <label> 💰 Bill value</label>
      <input type="text" />
      <label> 🙋🏻‍♂️ Your expense</label>
      <input type="text" />
      <label> 🙋🏻‍♀️ X's expense</label>
      <input type="text" disabled />

      <label> 💎Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>

      <Button>Split</Button>
    </form>
  );
}

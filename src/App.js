import { useState } from "react";

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
  const [showFriend, setShowFriend] = useState(false);
  const [friend, setFriend] = useState(initialFriends);
  function handleFriend(friend) {
    setFriend((friends) => {
      return [...friends, friend];
    });
    console.log(friend);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friend={friend} />
        {showFriend && (
          <FormAddFriend
            setFriend={setFriend}
            friend={friend}
            handleFriend={handleFriend}
          />
        )}
        <Button
          onClick={() => {
            return setShowFriend(!showFriend);
          }}
        >
          {showFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}
function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}{" "}
    </button>
  );
}
function FriendsList({ friend }) {
  return (
    <ul>
      {friend.map((value) => {
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

function FormAddFriend({ handleFriend }) {
  const [name, setAddName] = useState("");
  const [image, setImgUrl] = useState("https://i.pravatar.cc/48");

  function handleSubmit(event) {
    event.preventDefault();
    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newfriends = {
      id: id,
      name: name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    handleFriend(newfriends);
    setAddName("");
    setImgUrl("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🙎🏻‍♀️Friend name </label>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          return setAddName(e.target.value);
        }}
      />
      <label> 🏁 Image url</label>
      <input
        type="text"
        value={image}
        onChange={(e) => {
          return setImgUrl(e.target.value);
        }}
      />
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

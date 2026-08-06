import { useState, useEffect} from 'react'
import './App.css'

// const Welcome = () => {
//   return <h1>Hello, World!</h1>;
// };








// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <button onClick={() => setCount(count + 1)}>
//         Count: {count}
//       </button>
//       <Welcome />
//     </>
//   );
// }

// export default App










// function App() {
//   return (
//     <div>
//       <Welcome />
//       <Welcome />
//     </div>
//   );
// }

// export default App








// function JSXExample() {
//   const name = "John";
//   const isLoggedIn = true;

//   return (
//     <div>
//       {/* Use curly braces for JavaScript expressions */}
//       <h1>Hello, {name}!</h1>

//       {/* className instead of class */}
//       <div className="container">

//         {/* camelCase for attributes */}
//         <button onClick={() => console.log('Clicked!')}>
//           Click me
//         </button>

//         {/* Self-closing tags need slash */}
//         <img src="image.jpg" alt="Description" />

//         {/* Conditional rendering */}
//         {isLoggedIn && <p>Welcome back!</p>}
//       </div>
//     </div>
//   );
// }

// export default JSXExample;








// Child component
// function Greeting(props) {
//   return <h1>Hello, {props.name}!</h1>;
// }

//parent component
// function App() {
//   return <Greeting name="Akankshya" />;
// }

// function App() {
//   return (
//     <div>
//       <Greeting name="Alice" age={25} />
//       <Greeting name="Bob" age={30} />
//     </div>
//   );
// }


// export default App;











// // Or with destructuring
// function Greeting({ name, age }) {
//   return (
//     <div>
//       <h1>Hello, {name}!</h1>
//       <p>You are {age} years old.</p>
//     </div>
//   );
// }

// // Parent component
// function App() {
//   return (
//     <div>
//       <Greeting name="Alice" age={25} />
//       <Greeting name="Bob" age={30} />
//     </div>
//   );
// }

// export default App;










// function Greeting({ name = "Guest", age = 0 }) {
//   return <h1>Hello, {name}! Age: {age}</h1>;
// }

// export default Greeting;












// function Counter() {
//   // Declare state variable with initial value
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//       <button onClick={() => setCount(0)}>
//         Reset
//       </button>
//     </div>
//   );
// }

// export default Counter











// function UserProfile() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [age, setAge] = useState(0);

//   return (
//     <div>
//       <input
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Name"
//       />
//       <input
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//       />
//       <input
//         type="number"
//         value={age}
//         onChange={(e) => setAge(Number(e.target.value))}
//         placeholder="Age"
//       />
//       <p>Name: {name}, Email: {email}, Age: {age}</p>
//     </div>
//   );
// }

// export default UserProfile












// function UserForm() {
//   const [user, setUser] = useState({
//     name: '',
//     email: '',
//     age: 0
//   });

//   const updateUser = (field, value) => {
//     setUser(prevUser => ({
//       ...prevUser,
//       [field]: value
//     }));
//   };

//   return (
//     <div>
//       <input
//         value={user.name}
//         onChange={(e) => updateUser('name', e.target.value)}
//         placeholder="Name"
//       />
//       <input
//         value={user.email}
//         onChange={(e) => updateUser('email', e.target.value)}
//         placeholder="Email"
//       />
//     </div>
//   );
// }

// export default UserForm












// function EventExample() {
//   const [message, setMessage] = useState('');

//   const handleClick = () => {
//     setMessage('Button was clicked!');
//   };

//   const handleInputChange = (e) => {
//     setMessage(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent page refresh
//     console.log('Form submitted:', message);
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Click me</button>

//       <form onSubmit={handleSubmit}>
//         <input
//           value={message}
//           onChange={handleInputChange}
//           placeholder="Type something..."
//         />
//         <button type="submit">Submit</button>
//       </form>

//       <p>Message: {message}</p>
//     </div>
//   );
// }

// export default EventExample













// function ConditionalExample() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userRole] = useState('guest');

//   return (
//     <div>
//       {/* Simple conditional */}
//       {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in</h1>}

//       {/* Logical AND */}
//       {isLoggedIn && <p>You have access to premium features</p>}

//       {/* Multiple conditions */}
//       {userRole === 'admin' && <button>Admin Panel</button>}
//       {userRole === 'user' && <button>User Dashboard</button>}
//       {userRole === 'guest' && <button>Sign Up</button>}

//       <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
//         Toggle Login
//       </button>
//     </div>
//   );
// }

// export default ConditionalExample













// function TodoList() {
//   const [todos, setTodos] = useState([
//     { id: 1, text: 'Learn React', completed: false },
//     { id: 2, text: 'Build an app', completed: false },
//     { id: 3, text: 'Deploy to production', completed: true }
//   ]);

//   const toggleTodo = (id) => {
//     setTodos(todos.map(todo =>
//       todo.id === id
//         ? { ...todo, completed: !todo.completed }
//         : todo
//     ));
//   };

//   return (
//     <ul>
//       {todos.map(todo => (
//         <li
//           key={todo.id}
//           style={{
//             textDecoration: todo.completed ? 'line-through' : 'none'
//           }}
//         >
//           <input
//             type="checkbox"
//             checked={todo.completed}
//             onChange={() => toggleTodo(todo.id)}
//           />
//           {todo.text}
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default TodoList















// function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//     category: 'general'
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form data:', formData);
//     // Here you would typically send data to a server
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Name:</label>
//         <input
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <div>
//         <label>Email:</label>
//         <input
//           name="email"
//           type="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <div>
//         <label>Category:</label>
//         <select
//           name="category"
//           value={formData.category}
//           onChange={handleChange}
//         >
//           <option value="general">General</option>
//           <option value="support">Support</option>
//           <option value="sales">Sales</option>
//         </select>
//       </div>

//       <div>
//         <label>Message:</label>
//         <textarea
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           rows="4"
//         />
//       </div>

//       <button type="submit">Send Message</button>
//     </form>
//   );
// }

// export default ContactForm














// function DataFetcher() {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Effect runs after component mounts
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch('https://api.example.com/data');
//         const result = await response.json();
//         setData(result);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array means this runs once on mount

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div>
//       <h2>Data:</h2>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// }

// export default DataFetcher














// // Keep components small and focused
// function Button({ children, onClick, variant = 'primary' }) {
//   return (
//     <button
//       className={`btn btn-${variant}`}
//       onClick={onClick}
//     >
//       {children}
//     </button>
//   );
// }

// // Compose larger components from smaller ones
// function LoginForm() {
//   return (
//     <form>
//       <input type="email" placeholder="Email" />
//       <input type="password" placeholder="Password" />
//       <Button variant="primary">Log In</Button>
//       <Button variant="secondary">Sign Up</Button>
//     </form>
//   );
// }

// export default LoginForm














// Extract reusable logic into custom hooks
// function useLocalStorage(key, initialValue) {
//   const [value, setValue] = useState(() => {
//     try {
//       const item = window.localStorage.getItem(key);
//       return item ? JSON.parse(item) : initialValue;
//     } catch {
//       return initialValue;
//     }
//   });

//   useEffect(() => {
//     try {
//       window.localStorage.setItem(key, JSON.stringify(value));
//     } catch (error) {
//       console.error('Error saving to localStorage:', error);
//     }
//   }, [key, value]);

//   return [value, setValue];
// }

// // Usage
// function Settings() {
//   const [theme, setTheme] = useLocalStorage('theme', 'light');

//   return (
//     <div>
//       <p>Current theme: {theme}</p>
//       <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
//         Toggle Theme
//       </button>
//     </div>
//   );
// }

// export default Settings
















// function AsyncComponent() {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const loadData = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await fetch('/api/data');
//       setData(await response.json());
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <button onClick={loadData} disabled={loading}>
//         {loading ? 'Loading...' : 'Load Data'}
//       </button>
//       {error && <p style={{color: 'red'}}>Error: {error}</p>}
//       {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
//     </div>
//   );
// }

// export default AsyncComponent
















// function Modal({ isOpen, onClose, title, children }) {
//   if (!isOpen) return null;

//   return (
//     <div style={{
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       backgroundColor: 'rgba(0,0,0,0.5)',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center'
//     }}>
//       <div style={{
//         backgroundColor: 'white',
//         padding: '20px',
//         borderRadius: '8px',
//         minWidth: '300px'
//       }}>
//         <div style={{display: 'flex', justifyContent: 'space-between'}}>
//           <h2>{title}</h2>
//           <button onClick={onClose}>×</button>
//         </div>
//         {children}
//       </div>
//     </div>
//   );
// }

// // Usage
// function App() {
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setShowModal(true)}>
//         Open Modal
//       </button>

//       <Modal
//         isOpen={showModal}
//         onClose={() => setShowModal(false)}
//         title="Example Modal"
//       >
//         <p>This is modal content!</p>
//         <button onClick={() => setShowModal(false)}>
//           Close
//         </button>
//       </Modal>
//     </div>
//   );
// }

// export default App













function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();

        if (!cancelled) {
          setData(result);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      cancelled = true;
    };
  }, [url]);

  return { data, loading, error };
}

// Usage
function UserProfile({ userId }) {
  const { data: user, loading, error } = useApi(`/api/users/${userId}`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}


export default UserProfile





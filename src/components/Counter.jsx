import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    return (
        <div>
        <p>Anda Telah mengklik tombol sebanyak: {count} kali</p>
        <button onClick={handleIncrement} className="btn btn-success"> Tamah +1
        </button>
        </div>
    );
}

export default Counter;
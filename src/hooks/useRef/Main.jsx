import { useRef } from "react"

export default function Main() {

  const parag = useRef();
  const moveDown = () => {
    parag.current.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  const values = Array.from({ length: 150 }, () => Math.random() * 100);
  return (
    <>
      <h2 >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Perferendis, non corrupti. Consectetur
      </h2>

      <button onClick={() => { moveDown() }} style={{ color: 'red', marginLeft: 45, width: 55, height: 45 }}>Go Down</button>

      {values.map((value) => (
        <div key={value} style={{ display: 'flex', width: 'fit-content', height: 50, margin: 10, backgroundColor: 'orange' }}>{value}</div>
      ))}
      <h2 ref={parag} style={{ textAlign: 'center' }}>End</h2>
    </>
  )
}

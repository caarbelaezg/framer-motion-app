import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./components/Button/Button";
import { PresentationCard } from "./components/PresentationCard/PresentationCard";

import "./App.css";
import { DropDownMenu } from "./components/DropDownMenu/DropDownMenu";

function App() {
  const [count, setCount] = useState(0);
  const [showComponent, setShowComponent] = useState(false);

  const incrementCount = () => {
    setCount((count) => count + 1);
  };

  return (
    <>
      <div className="random">Random container</div>
      <PresentationCard />
      <div className="card">
        <Button count={incrementCount}>count is {count}</Button>
        <button onClick={() => setShowComponent(!showComponent)}>
          {!showComponent ? "Show component" : "Hide component"}
        </button>
      </div>
      <AnimatePresence>
        {showComponent ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h3>Animated list</h3>
            <motion.ul>
              <li>Cosa 1</li>
            </motion.ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <DropDownMenu />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nihil velit aliquam dolore, veniam sit quaerat voluptates porro, ipsam incidunt saepe, asperiores quasi fuga voluptate quibusdam iste. Dolores, voluptatibus facere magnam suscipit consequatur dolore voluptatem et expedita, pariatur maiores modi animi illum a quas omnis autem, ullam harum odio sapiente rem minima corrupti ea? Dolor, maxime vero! Accusantium voluptates sed beatae ab in delectus asperiores dicta natus autem corporis ea, quam nisi, harum, iusto amet repellat magni minus deleniti iure saepe aspernatur veritatis officia molestias deserunt! Commodi mollitia error doloribus consectetur inventore consequuntur! Obcaecati a ullam cupiditate earum nulla deleniti, soluta asperiores enim reprehenderit nam. Id, optio. Soluta, omnis? Consequuntur, distinctio alias! Magni nisi quis libero, veritatis fuga dolorum doloribus ut maxime. Odit saepe neque minima alias eligendi ducimus dicta mollitia, magnam repellendus modi ipsum tenetur unde ad vel accusantium id repudiandae nihil a ab animi est sunt reprehenderit? Aspernatur atque, ipsa, inventore dolor quidem provident deleniti ratione illum iste quibusdam nam debitis, quis voluptatum voluptatibus. Quo delectus sapiente tempora quas aperiam in tenetur nihil similique ab distinctio iure ut, ipsam voluptatibus soluta assumenda ullam, deserunt possimus placeat minima nemo fuga est consequatur sed numquam? Error vero velit aspernatur voluptatem.
      </div>

    </>
  );
}

export default App;

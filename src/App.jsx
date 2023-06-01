import { useState, useEffect } from "react";
import { motion, AnimatePresence, useCycle, useAnimate, stagger } from "framer-motion";
import { Button } from "./components/Button/Button";
import { PresentationCard } from "./components/PresentationCard/PresentationCard";

import "./App.css";
import { DropDownMenu } from "./components/DropDownMenu/DropDownMenu";
import { MenuToggle } from "./components/MenuToggle/MenuToggle";
import { Menu } from "./components/MenuToggle/Menu";

function App() {
  const [count, setCount] = useState(0);
  const [showComponent, setShowComponent] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = showMenu
      ? [
          [
            "nav",
            { transform: "translateX(0%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
          ],
          [
            "li",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-0.1" },
          ],
        ]
      : [
          [
            "li",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }), at: "<" },
          ],
          ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }],
        ];

    animate([
      [
        "path.top",
        { d: showMenu ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" },
      ],
      ["path.middle", { opacity: showMenu ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: showMenu ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" },
      ],
      ...menuAnimations
    ]);
  }, [showMenu]);

  const incrementCount = () => {
    setCount((count) => count + 1);
  };

  const [x, cycleX] = useCycle(0, 50, 100);

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
      {/* <AnimatePresence>
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
      </AnimatePresence> */}
      {/* <DropDownMenu /> */}
      <motion.div animate={{ x: x }} onTap={() => cycleX()}>
        cosa
      </motion.div>
      <div ref={scope}>
        <MenuToggle toggle={() => setShowMenu(!showMenu)} />
        <Menu />
      </div>
    </>
  );
}

export default App;

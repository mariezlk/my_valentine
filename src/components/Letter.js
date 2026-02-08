import { motion } from "framer-motion";
import { useState } from "react";

export default function Letter({content, start}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      
      {/* Brief */}
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        onClick={() => setOpen(false)}
        animate={open ? { y: -80, opacity: 1, zIndex: 2} : {}}
        transition={{ duration: 0.6 }}
        style={{
          position: "absolute",
          width: "250px",
          height: 190,
          background: "white",
          borderRadius: 8,
          padding: 20,
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          zIndex: 4
        }}
      >
        <p style={{ fontSize: 18 }}>
          {start}
          <br />
           {content.compliment}
        </p>
      </motion.div>

      {/* Umschlag */}
      <div
        style={{
          width: "280px",
          height: 200,
          background: "#f5f5f5",
          borderRadius: 10,
          position: "relative",
          overflow: "visible"
        }}
      >
        {/* Klappe */}
        <motion.div
          style={{
            width: 0,
            height: 0,
            borderRadius: 10,
            borderLeft: "140px solid transparent",
            borderRight: "140px solid transparent",
            borderTop: "100px solid #e0e0e0",
            position: "absolute",
            top: 0,
            left: 0,
            transformOrigin: "top",
            zIndex: 1
          }}
        />
        <motion.div
          style={{
            width: 0,
            height: 0,
            borderRadius: 10,
            borderLeft: "140px solid transparent",
            borderRight: "140px solid transparent",
            borderTop: "100px solid transparent",
            borderBottom: "100px solid #f5f5f5",
            position: "absolute",
            top: 0,
            left: 0,
            transformOrigin: "top",
            zIndex: 5
          }}
        />
        <motion.div
          style={{
            width: 0,
            height: 0,
            borderRadius: 10,
            borderTop: "100px solid transparent",
            borderBottom: "100px solid transparent",
            borderRight: "140px solid #f5f5f5", // längste Kante rechts
            borderLeft: "140px solid transparent", // links nur für Form
            position: "absolute",
            top: 0,
            left: 0,
            transformOrigin: "top",
            zIndex: 5
          }}
        />
        <motion.div
          style={{
            width: 0,
            height: 0,
            borderRadius: 10,
            borderTop: "100px solid transparent",
            borderBottom: "100px solid transparent",
            borderRight: "140px solid transparent", // längste Kante rechts
            borderLeft: "140px solid #f5f5f5", // links nur für Form
            position: "absolute",
            top: 0,
            left: 0,
            transformOrigin: "top",
            zIndex: 5
          }}
        />
        <motion.div
          animate={open ? { rotateX: -180, top: 5 } : { rotateX: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            width: 0,
            height: 0,
            borderRadius: 10,
            borderLeft: "140px solid transparent",
            borderRight: "140px solid transparent",
            borderTop: "100px solid #e0e0e0",
            position: "absolute",
            top: 0,
            left: 0,
            transformOrigin: "top",
            zIndex: 1
          }}
        />
        {!open && (
          <motion.div
            onClick={() => setOpen(true)}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: 40,
              cursor: "pointer",
              zIndex: 6
            }}
          >
            ❤️
          </motion.div>
        )}
      </div>
    </>
  );
}
import * as React  from "react"
import { useRef, useEffect } from "react";
import {gsap} from 'gsap'
 export default function PrincipalIcon(props) {
  
  const circle = useRef();
  const computerRef = useRef();
  const miniComputerRef = useRef();
  const svg = useRef();
   
  

  useEffect(() => {
    props.timeline.to(svg.current,{visibility: 'visible', duration: 0});
    props.timeline.from(circle.current,{opacity: .1, r:0, duration: 2,  ease: 'power4', delay:.5});
    props.timeline.from(computerRef.current,{ x:-700, opacity: .1, duration: 1,  ease: "power4"});
    props.timeline.from(miniComputerRef.current,{ x:700, opacity: .1, duration: 1,  ease: "power4"});
    
      
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props} className="principal-icon" ref={svg}>
      <circle cx={256} cy={256} r={256} fill="#88c5cc" ref={circle}/>

      <g ref={computerRef}>
      <path
        d="M60 304V128.364c0-5 3.22-8.364 8-8.364h328c4.784 0 8 3.36 8 8.364V304H60z"
        fill="#1e2c33"
      />
        <path
        d="M60 304v32c0 4.78 3.22 8 8 8h328c4.784 0 8-3.22 8-8v-32H60z"
        fill="#f5f5f5"
        />
      <path fill="#586874" d="M76 140h312v148H76z" />
      <path fill="#e6e6e6" d="M188 344h88v36h-88z" />
      <path
        d="M304 388c0-4.4-3.6-8-8-8H168c-4.4 0-8 3.6-8 8s3.6 8 8 8h128c4.4 0 8-3.6 8-8z"
        fill="#f5f5f5"
        />
      <circle cx={232} cy={324} r={8} fill="#1e2c33" />
      </g>
      <g ref={miniComputerRef}>
      <path
        d="M224 400h228v8c0 4.236-3.764 4-8 4H232c-4.228 0-8 .236-8-4v-8z"
        fill="#f5f5f5"
        />
      <path
        d="M364.504 400s-2.3 4-5.124 4h-35.896c-2.836 0-5.128-4-5.128-4h46.148z"
        fill="#ccc"
        />
      <path
        d="M244 400V284c0-4.228 3.772-8 8-8h172c4.236 0 8 3.772 8 8v116H244z"
        fill="#1e2c33"
        />

      <path fill="#586874" d="M256 292h164v108H256z" />
        
      <circle cx={338} cy={283.996} r={4} fill="#cc584c" />
      </g>
    </svg>
  )
}



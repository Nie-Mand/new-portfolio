import { useRef, useState, useEffect, useMemo } from 'react'
import { useViewportScroll, useTransform } from 'framer-motion'
import { TransformOptions } from 'framer-motion/types/utils/transform'

type Options = {
  yOffset?
  easing?
  triggerPoint?
  fadeOut?
}
const useParallaxEffect = (options?: Options) => {
  const {
    yOffset = 100,
    easing = [0.42, 0, 0.58, 1],
    triggerPoint = 0.1,
    fadeOut = false,
  } = options
  const { scrollY } = useViewportScroll()
  const ref = useRef()
  const [elementTop, setElementTop] = useState(0)
  const [elementBottom, setElementBottom] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)

  useEffect(() => {
    if (!ref.current) return

    const setValues = () => {
      setElementTop(ref.current.offsetTop)
      setElementBottom(ref.current.offsetTop + ref.current.offsetHeight)
      setClientHeight(window.innerHeight)
    }

    setValues()
    document.addEventListener('load', setValues)
    window.addEventListener('resize', setValues)

    return () => {
      document.removeEventListener('load', setValues)
      window.removeEventListener('resize', setValues)
    }
  }, [ref, yOffset])

  const transformInitialValue = elementTop - clientHeight * triggerPoint
  const transformFinalValue = elementTop + yOffset

  const yRange = [transformInitialValue, transformFinalValue]

  const y = useTransform(
    scrollY,
    yRange,
    [0, -yOffset],
    easing as TransformOptions<number>
  )

  const opacityInitialValue = fadeOut ? 0 : 1
  const opacityRange = useMemo(
    () => [opacityInitialValue, 1],
    [opacityInitialValue]
  )

  const yOpacityRange = [elementBottom, transformFinalValue - yOffset]
  const opacity = useTransform(
    scrollY,
    yOpacityRange,
    opacityRange,
    'anticipate' as TransformOptions<number>
  )

  return {
    ref,
    initial: { y: 0 },
    style: {
      y,
      opacity,
    },
  }
}

export default useParallaxEffect

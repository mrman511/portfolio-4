export const getInitial = (i) => (
  (i === 0) ? {
  translateX: '-50%',
  left: '50%',
  scale: 1,
  opacity: 1,
  zIndex: 2,
} : {
  translateX: '-100%',
  left: '100%',
  scale: .5,
  opacity: 0,
  zIndex: 0,
})

export const getCardAnimation = (currentCard, i) => {
  if (currentCard === i){
    return {
      translateX: '-50%',
      left: '50%',
      scale: 1,
      opacity: 1,
      zIndex: 2,
    }
  } else if (currentCard > i){
    return {
      translateX: '-100%',
      left: '100%',
      scale: .5,
      opacity: 0,
      zIndex: 0,
    }
  } else if (currentCard < i){
    console.log('here');
    return {
      translateX: '100%',
      left: '-1%',
      scale: .5,
      opacity: 0,
      zIndex: 0,
    }
  }
}
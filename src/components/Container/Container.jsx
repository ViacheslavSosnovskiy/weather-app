import React from 'react'

const styles = {
    div: {
        'maxWodth': '604px',
        'height': '829px',
        'marginTop': '80px',
        'borderRadius': '12px',
        
    }
}

const Container = ({children}) => {
  return (
    <div style={styles.div}>{children}</div>
  )
}

export default Container
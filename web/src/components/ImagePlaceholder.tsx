import React from 'react'
import styled from 'styled-components'

import Spinner from './Spinner'

function ImagePlaceholder() {
  return (
    <ImagePlaceholder.Container className="loading-img">
      <Spinner />
    </ImagePlaceholder.Container>
  )
}

ImagePlaceholder.Container = styled.div`
  width: 200px;
  height: 200px;
  align-self: center;
  background: transparent;
`

export default ImagePlaceholder

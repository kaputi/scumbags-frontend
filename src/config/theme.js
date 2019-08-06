// image urls
const logo = '/images/logo.png'
const mainBackground = '/images/green-grayscale.jpg'

// configs
const config = {
  images: {
    logo,
    mainBackground,
    sizes: {
      small: '100px',
      medium: '350px',
      large: '550px',
    },
  },
  maxWidth: '1130px',
}

export const light = {
  ...config,
  backgroundColor: 'white',
}

export const dark = {
  ...config,
  backgroundColor: '#424242',
}

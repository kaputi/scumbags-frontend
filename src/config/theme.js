// image urls
const logo = '/images/logo.png'
const mainBackground = '/images/green-grayscale.jpg'

//colors
const lightGray = '#888'

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
  iconSize: '2x',
}

export const light = {
  ...config,
  backgroundColor: 'white',
  menuItemColor: lightGray,
}

export const dark = {
  ...config,
  backgroundColor: '#424242',
  menuItemColor: lightGray,
}

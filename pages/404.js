import { NextSeo } from "next-seo"
import propTypes from 'prop-types'
import { useTranslation } from "react-i18next"

const FourZeroFour = () => {

  const { t } = useTranslation('common')

  const SEO = {
    title: "Next website",  
    description: "Database of movies created with Next.js and Strapi",
  }

  return (
    <>
     
     <NextSeo {...SEO } />
      not found
    </>
  ) 
}


FourZeroFour.propTypes = {
  //t: propTypes.func.isRequired,
}
 

export default FourZeroFour
 

FourZeroFour.getInitialProps = async () => {
  return { 
    namespacesRequired: ['common']
  }
}



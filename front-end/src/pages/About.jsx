import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

        <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus enim officia neque? Eveniet iusto incidunt voluptatum odio adipisci vitae labore nobis minus, praesentium, consequatur odit accusamus inventore repellat quae. Quisquam.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur quod at provident recusandae qui voluptate harum laboriosam unde aliquid possimus nostrum ducimus molestiae magni sit, dolore nihil suscipit, iure odio a nulla iste minima! Suscipit ipsam totam accusantium dignissimos vitae nihil maxime fugiat quibusdam distinctio.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus esse eius, quibusdam iusto voluptate, quo quae voluptas dolor vitae maxime, sunt officiis exercitationem facere cupiditate laboriosam. Modi amet fugiat praesentium consequuntur iste, aperiam commodi? Quibusdam accusamus quam voluptatem sequi?</p>
          </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eveniet sapiente deserunt cum suscipit, eaque nihil, iure optio, quo porro labore neque laudantium officia magni repudiandae quam praesentium in!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eveniet sapiente deserunt cum suscipit, eaque nihil, iure optio, quo porro labore neque laudantium officia magni repudiandae quam praesentium in!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eveniet sapiente deserunt cum suscipit, eaque nihil, iure optio, quo porro labore neque laudantium officia magni repudiandae quam praesentium in!</p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default About

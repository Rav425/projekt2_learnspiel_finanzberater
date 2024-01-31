import React from 'react'
import firstPlaceRibbon from '../assets/first-place-ribbon.png' 
import secondPlaceRibbon from '../assets/second-place-ribbon.png' 
import thirdPlaceRibbon from '../assets/third-place-ribbon.png'
export default function Leaderboard() {
  return (
    <div className='overflow-x-auto relative shadow-md sm:rounded-lg'>
        <table>
            <thead>
                <tr>
                    <th className='p-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-700 tracking-wider'>Platz</th>
                    <th className='p-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-700 tracking-wider'>Name</th>
                    <th className='p-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-700 tracking-wider'>Punkte</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='p-3 border-b border-gray-300 text-sm leading-5 text-gray-700'>1</td>
                    <td className='group'><img className='h-9 w-9 transform group-hover:scale-110' src={firstPlaceRibbon} alt="" /></td>
                    <td className='p-3 border-b border-gray-300 text-sm leading-5 text-gray-700'>Max Mustermann</td>
                    <td className='p-3 border-b border-gray-300 text-sm leading-5 text-gray-700'>100</td>
                </tr>
                <tr>
                    <td className='p-3 border-b border-gray-300 text-sm leading-5 text-gray-700'>2</td>
                    <td className='group'><img className='h-9 w-9 transform group-hover:scale-110' src={secondPlaceRibbon} alt="" /></td>
                    <td className='p-3 border-b border-gray-300 text-sm leading-5 text-gray-700'>Max Mustermann</td>
                    <td className='p-3 border-b border-gray-300 text-sm leading-5 text-gray-700'>100</td>
                </tr>
                <tr>
                    <td className='p-3 border-b border-gray-300 text-sm leading-5 text-gray-700'>3</td>
                    <td className='group'><img className='h-9 w-9 transform group-hover:scale-110' src={thirdPlaceRibbon} alt="" /></td>
                    <td className='p-3 border-b border-gray-300 text-sm leading-5 text-gray-700'>Max Mustermann</td>
                    <td className='p-3 border-b border-gray-300 text-sm leading-5 text-gray-700'>100</td>
                </tr>
                <tr>
                    <td className='p-3 border-b border-gray-300 text-sm leading-5 text-gray-700'>4</td>
                    <td className='p-3 border-b border-gray-300 text-sm leading-5 text-gray-700'>Max Mustermann</td>
                    <td className='p-3 border-b border-gray-300 text-sm leading-5 text-gray-700'>100</td>
                </tr>
                <tr>
                    <td className='p-3 border-b border-gray-300 text-sm leading-5 text-gray-700'>5</td>
                    <td className='p-3 border-b border-gray-300 text-sm leading-5 text-gray-700'>Max Mustermann</td>
                    <td className='p-3 border-b border-gray-300 text-sm leading-5 text-gray-700'>100</td>
                </tr>
                <tr>
                    <td className='p-3 border-b border-gray-300 text-sm leading-5 text-gray-700'>6</td>
                    <td className='p-3 border-b border-gray-300 text-sm leading-5 text-gray-700'>Max Mustermann</td>
                    <td className='p-3 border-b border-gray-300 text-sm leading-5 text-gray-700'>100</td>
                </tr>
                <tr>
                    <td className='p-3 border-b border-gray-300 text-sm leading-5 text-gray-700'>7</td>
                    <td className='p-3 border-b border-gray-300 text-sm leading-5 text-gray-700'>Max Mustermann</td>
                    <td className='p-3 border-b border-gray-300 text-sm leading-5 text-gray-700'>100</td>
                </tr>
                <tr>
                    <td className='p-3 border-b border-gray-300 text-sm leading-5 text-gray-700'>8</td>
                    <td className='p-3 border-b border-gray-300 text-sm leading-5 text-gray-700'>Max Mustermann</td>
                    <td className='p-3 border-b border-gray-300 text-sm leading-5 text-gray-700'>100</td>
            {/* <img src="../assets/second-place-ribbon.png" alt="" /> */}
                </tr>
                
            </tbody>
        </table>
    </div>
  )
}

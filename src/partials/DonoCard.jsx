import React from 'react'

const DonoCard = ({name, address, qrcode}) => {
  return (
    <div data-aos="fade-up" data-aos-delay="400">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-800">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                    <p className="text-gray-400 text-base break-words">
                        {address}
                    </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded px-3 py-3 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    <img className='h-32 w-32' src={qrcode}/>
                </span>
            </div>
        </div>
    </div>
  )
}

export default DonoCard
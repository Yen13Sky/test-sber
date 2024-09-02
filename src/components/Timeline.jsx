import { useState, useEffect } from "react"

export default function Timeline() {
	const timelinesArray = [
		{
			id: 1, step: 0, data: [
				{ title: 'step1', type: 'start' },
				{ title: 'veeery looong steeep', type: 'middle' },
				{ title: 'step3', type: 'middle' },
				{ title: 'step4', type: 'end' },

			]
		},
		{
			id: 2, step: 0, data: [
				{ title: 'step1', type: 'start' },
				{ title: 'veeery looong steeep', type: 'middle' },
				{ title: 'step3', type: 'middle' },
				{ title: 'step4', type: 'end' },

			]
		},
		{
			id: 3, step: 0, data: [
				{ title: 'step1', type: 'start' },
				{ title: 'veeery looong steeep', type: 'middle' },
				{ title: 'step3', type: 'middle' },
				{ title: 'step4', type: 'end' },

			]
		},
		{
			id: 4, step: 0, data: [
				{ title: 'step1', type: 'start' },
				{ title: 'veeery looong steeep', type: 'middle' },
				{ title: 'step3', type: 'middle' },
				{ title: 'step4', type: 'end' },

			]
		},

	]
	const [timelinesData, setTimelinesData] = useState(timelinesArray)
	function nextStep(id) {
		const step = timelinesData.find(item => item.id === id).step
		setTimelinesData(oldArray => oldArray.map(item => item.id === id ? { ...item, step: step + 1 } : item))

	}
	function prevStep(id) {
		const step = timelinesData.find(item => item.id === id).step
		setTimelinesData(oldArray => oldArray.map(item => item.id === id ? { ...item, step: step - 1 } : item))

	}
	function addStep(id) {
		const data = timelinesData.find(item => item.id === id).data
		const counter = data.length
		const newStep = { title: `step${counter + 1}`, type: 'end' }
		data[counter - 1].type = 'middle'
		data.push(newStep)
		setTimelinesData(oldArray => oldArray.map(item => item.id === id ? { ...item, data: data } : item))
	}
	const listTimelines = timelinesData.map((timeline, index) => (
		<div className={'timeline__content ' + (timeline.id === 1 || timeline.id === 3 ? 'timeline-first' : 'timeline-second')} key={timeline.id}>
			<div className="timeline__row">
				<div className="timeline__items">
					{timeline.data.map((item, index) => (
						<div className={'timeline__item ' + (timeline.id === 1 || timeline.id === 3 ? (item.type === 'start' ? ' _start' : '') + (item.type === 'end' ? ' _end' : '') : '')} key={item.title}>
							{timeline.id === 1 || timeline.id === 2 ?
								<div className={(timeline.id === 1 ?
									'timeline-first__title ' : 'timeline-second__title ')
									+ (timeline.step == index ? ' _process' : '')
									+ (timeline.step > index ? ' _done' : '')
									+ (timeline.step < index ? ' _coming' : '')
									+ (item.type === 'start' ? ' _start' : '')
									+ (item.type === 'end' ? ' _end' : '')}>
									<p>{item.title}</p>
								</div> :
								<div className={'timeline__step'
									+ (timeline.step == index ? ' _process' : '')
									+ (timeline.step > index ? ' _done' : '')
									+ (timeline.step < index ? ' _coming' : '')
									+ (item.type === 'start' ? ' _start' : '')
									+ (item.type === 'end' && timeline.data.length > 2 ? ' _end' : '')}>
									{timeline.id === 3 &&
										<div className={'timeline__circle' + (timeline.step == index ? ' _process' : '') + (timeline.step > index ? ' _done' : '') + (timeline.step < index ? ' _coming' : '')}>
										</div>}
									{timeline.id === 3 &&
										<div className={'timeline__line' + (timeline.step == index ? ' _coming' : '') + (timeline.step > index ? ' _done' : '') + (item.type === 'end' ? ' _end' : '')}>
										</div>}
									{timeline.id === 4 && item.type === 'start' ?
										<div className={'timeline__circle left' + (timeline.step == index ? ' _process' : '') + (timeline.step > index ? ' _done' : '')}>

										</div> : ''}
									{timeline.id === 4 &&
										<div className={'timeline__line' + (timeline.step == index ? ' _process' : '') + (timeline.step > index ? ' _done' : '') + (timeline.step < index ? ' _coming' : '')}>
										</div>}
									{timeline.id === 4 &&
										<div className={'timeline__circle right' + (timeline.step < index + 1 ? ' _coming' : '') + (timeline.step == index + 1 ? ' _process' : '') + (timeline.step > index + 1 ? ' _done' : '')}>
										</div>}
								</div>
							}
							{timeline.id === 3 || timeline.id === 4 ?
								<div className={(timeline.id === 3 ?
									'timeline-first__title-third' : 'timeline-second__title-fourth')
									+ (timeline.step == index ? ' _process' : '')
									+ (timeline.step > index ? ' _done' : '')
									+ (timeline.step < index ? ' _coming' : '')
									+ (item.type === 'start' ? ' _start' : '')
									+ (item.type === 'end' ? ' _end' : '')}>
									<p>{item.title}</p>
								</div> :
								<div className={'timeline__step'
									+ (timeline.step == index ? ' _process' : '')
									+ (timeline.step > index ? ' _done' : '') + (timeline.step < index ? ' _coming' : '')
									+ (item.type === 'start' ? ' _start' : '')
									+ (item.type === 'end' && timeline.data.length > 2 ? ' _end' : '')}>
									{timeline.id === 1 &&
										<div className={'timeline__circle' + (timeline.step == index ? ' _process' : '') + (timeline.step > index ? ' _done' : '') + (timeline.step < index ? ' _coming' : '')}></div>}
									{timeline.id === 1 &&
										<div className={'timeline__line' + (timeline.step == index ? ' _coming' : '') + (timeline.step > index ? ' _done' : '') + (item.type === 'end' ? ' _end' : '')}></div>}
									{timeline.id === 2 &&
										item.type === 'start' ? <div className={'timeline__circle left' + (timeline.step == index ? ' _process' : '') + (timeline.step > index ? ' _done' : '')}></div> : ''}
									{timeline.id === 2 &&
										<div className={'timeline__line' + (timeline.step == index ? ' _process' : '') + (timeline.step > index ? ' _done' : '') + (timeline.step < index ? ' _coming' : '')}></div>}
									{timeline.id === 2 &&
										<div className={'timeline__circle right' + (timeline.step < index + 1 ? ' _coming' : '') + (timeline.step == index + 1 ? ' _process' : '') + (timeline.step > index + 1 ? ' _done' : '')}></div>}
								</div>}
						</div>
					))}
				</div>
				<div className="timeline__buttons timeline-btn">
					<button type="button" className="timeline-btn__item _add" onClick={() => { addStep(timeline.id) }}>Добавить</button>
					{timeline.step > 0 && <button type="button" className="timeline-btn__item _prev" onClick={() => { prevStep(timeline.id) }}>Назад</button>}
					{timeline.step < timelinesData.length - 1 && <button type="button" className="timeline-btn__item _next" onClick={() => { nextStep(timeline.id) }}>Вперед</button>}
				</div>
			</div>
		</div>

	))
	return (
		<div className="timeline__wrapper">
			{listTimelines}
		</div>
	)
}
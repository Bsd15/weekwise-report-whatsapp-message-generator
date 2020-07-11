import React, { useState, useCallback } from 'react';
import classes from './withAlert.module.css';
enum AlertType {
	Primary = 'border-blue-500',
	Danger = 'border-red-600',
	Info = 'border-yellow-500',
	Success = 'border-green-500',
}

const withAlert = (WrappedComponent: React.ComponentType<any>) => {
	const ComponentWithAlert = (props) => {
		const [alertBoxShowClass, setAlertBoxShowClass] = useState('');
		const [alertMessage, setAlertMessage] = useState('');
		const [alertBoxBorderClass, setalertBoxBorderClass] = useState(
			AlertType.Primary
		);

		const showAlertBox = useCallback(() => {
			setAlertBoxShowClass(classes.alertBoxShow);
		}, []);

		const hideAlertBox = useCallback(() => {
			setAlertBoxShowClass('');
		}, []);

		const showAlert = (message: string, alertType: AlertType) => {
			if (message) {
				setAlertMessage(message);
				setalertBoxBorderClass(alertType);
				showAlertBox();
			}
		};

		return (
			<>
				<WrappedComponent {...props} />
				<button
					className="bg-blue-500 p-3"
					onClick={() => showAlert('Test alert', AlertType.Success)}
				>
					Trigger animation
				</button>
				<article
					className={`fixed bottom-0 left-0 right-0 mx-auto container w-full lg:w-1/2 p-2 bg-white shadow-2xl border-t-8 ${alertBoxBorderClass} ${classes.alertBox} ${alertBoxShowClass}`}
				>
					<section id="content" className="flex flex-col items-center">
						<section id="message" className="h-16 overflow-y-auto">
							<p>{alertMessage}</p>
						</section>
						<section id="close">
							<button
								className="bg-red-200 hover:bg-red-300 text-red-700 font-bold p-2 w-20"
								onClick={hideAlertBox}
							>
								Close
							</button>
						</section>
					</section>
				</article>
			</>
		);
	};
	return ComponentWithAlert;
};

export default withAlert;
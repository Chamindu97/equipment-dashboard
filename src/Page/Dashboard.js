import React, {useEffect} from 'react';
import Graph from '../Components/Graph';
import CircularProgress from '@material-ui/core/CircularProgress'
import '../CSS/style.scss'
import { useDispatch, useSelector } from 'react-redux';
import {getdata, dataLoaded} from '../Actions/Actions';
import CountUp from 'react-countup';

function Dashboard() {

	const dispatch = useDispatch();
	const rootstate = useSelector(state => state);

	const max_value = 90
	const total_objs = 300;

	useEffect(()=>{

		for (let last_index = 0; last_index < total_objs; last_index+=max_value) {
			getdata(dispatch, max_value, last_index);
		}

		dataLoaded(dispatch);
		
	}, [dispatch]);

	let equipement_type = {}
	let operationa_state = {
		'operational': 0,
		'non-operational': 0
	}
	
	if (!rootstate.Reducer.isloading) {
		for (let i= 0; i < rootstate.Reducer.data.length; i++) {
			if (rootstate.Reducer.data[i].AssetCategoryID in equipement_type) {
				equipement_type[rootstate.Reducer.data[i].AssetCategoryID] += 1
			} else {
				equipement_type[rootstate.Reducer.data[i].AssetCategoryID] = 1
			}
	
			if(rootstate.Reducer.data[i].OperationalStatus === "Operational") {
				operationa_state['operational'] += 1
			}else if (rootstate.Reducer.data[i].OperationalStatus === "Non-Operational") {
				operationa_state['non-operational'] += 1
			}
		}

	}

	return (
		<div className="container">
			<header>Equipment Dashboard</header>

			<section className="detail-panel">

				<div className="detail-panel__box">
					<h2 className="detail-panel__name">
						Operational
					</h2>
					<p className="detail-panel__count">{rootstate.Reducer.isloading ? <CircularProgress /> : <CountUp end={operationa_state['operational']} duration={2}/>}</p>
				</div> {/* !detail-panel__box*/}

				<div className="detail-panel__box">
					<h2 className="detail-panel__name">
						Non-Operational
					</h2>
					<p className="detail-panel__count">{rootstate.Reducer.isloading ? <CircularProgress /> : <CountUp end={operationa_state['non-operational']} duration={2} />}</p>
				</div> {/* !detail-panel__box*/}
			</section>{/* !detail-panel*/}

			<section className="graph">
				
				<div className="graph__content">
					
					<Graph data_obj={equipement_type}/>
				</div>
				
			</section>

		</div>
	)
}

export default Dashboard;
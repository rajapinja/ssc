import React, { useState } from 'react';
import axios from 'axios';
import '../css/ScheduleCreationScreen.css'; // Import CSS file for styles

const ScheduleCreationScreen = () => {
  const [taskName, setTaskName] = useState('');
  const [serviceDesc, setServiceDesc] = useState('');
  const [workerId, setWorkerId] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [completionDate, setCompletionDate] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newSchedule = {
      taskName,
      serviceDesc,
      workerId,
      date,
      startTime,
      endTime,
      completionDate,
      selectedStatus
    };

    try {
      const response = await axios.post('http://localhost:5000/api/schedule', newSchedule);
      console.log('Schedule created:', response.data);
      // Optionally, you can navigate the user to another screen or show a success message
    } catch (error) {
      console.error('Error creating schedule:', error);
      // Handle error: show error message to the user
    }
  };

  const handleSelectChange = (event) => {
    setSelectedStatus(event.target.value);
  };


  return (
    <div className="schedule-container">
      <div className="form-container">
        <h5 style={{textAlign:'center'}}>Create Schedule</h5>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label className="form-label">Task Name:</label>
            <input type="text" className="form-control" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
          </div>
          <div className="form-group">
            <label className="form-label">Service Description:</label>
            <textarea className="form-control" value={serviceDesc} onChange={(e) => setServiceDesc(e.target.value)} />
          </div>
          <div className="form-group">
            <label className="form-label">Worker ID:</label>
            <input type="text" className="form-control" value={workerId} onChange={(e) => setWorkerId(e.target.value)} />
          </div>
          <div className="form-group">
            <label className="form-label">Assignment Date:</label>
            <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
          <div className="form-group">
            <label className="form-label">Start Time:</label>
            <input type="time" className="form-control" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
          </div>
          <div className="form-group">
            <label className="form-label">End Time:</label>
            <input type="time" className="form-control" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
          </div>
          <div className="form-group">
            <label className="form-label">Completion Date:</label>
            <input type="date" className="form-control" value={completionDate} onChange={(e) => setCompletionDate(e.target.value)} />
          </div>
          <div className="form-group">
            <label className="form-label">Status:</label>
            <select className="form-control" id="status" name="status" value={selectedStatus} onChange={handleSelectChange}>
                <option value="">Select Status</option> {/* Default option */}
                <option value="assigned">Assigned</option>
                <option value="work_inprogress">Work in Progress</option>
                <option value="work_pending">Work Pending</option>
                <option value="work_completed">Work Completed</option>
                <option value="payment_pending">Payment Pending</option>
                <option value="payment_received">Payment Received</option>
                <option value="paid_to_worker">Paid To Worker</option>
                <option value="task_completed">Task Completed</option>
            </select>
          </div>          
          <button type="submit">Create Schedule</button>
        </form>
      </div>
    </div>
  );
};

export default ScheduleCreationScreen;

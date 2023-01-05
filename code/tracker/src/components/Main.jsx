var m_names = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

var d = new Date();
var month = m_names[d.getMonth()];

function Main(props) {
  let activities = props.activities;
  return (
    <section className="cards">
      {activities.map((task, i) => {
        return (
          <div
            className="card flex justify-center align-center padding-2"
            key={i}
          >
            <div className="task-info">
              <h2>{task.name}</h2>
              <span className="month">{month}</span>
            </div>
            <div className="task-days flex wrap flex-80">
              {task.days.map((day, z) => {
                return (
                  <span
                    className={`${day.isDone ? 'green' : ''} day flex-10`}
                    key={z}
                    onClick={() => props.handleIsDone(i, z)}
                  >
                    {day.id}
                  </span>
                );
              })}
            </div>
            <span className="close" onClick={() => props.handleCloseTask(i)}>
              ❌
            </span>
          </div>
        );
      })}
    </section>
  );
}

export default Main;

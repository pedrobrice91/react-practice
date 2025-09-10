export default function Footer({
  totalCount,
  completedCount,
  pendinTodosCount,
}) {
  return (
    <div>
      <div className="mt-4 text-sm text-gray-600 text-center">
        Total: {totalCount} | {
        pendinTodosCount === 0
          ? " Ya las completaste todas! "
          : `Completadas: ${completedCount} | Pendientes: ${pendinTodosCount}`}
      </div>
    </div>
  );
}

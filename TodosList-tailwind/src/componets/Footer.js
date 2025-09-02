export default function Footer({
  totalCount,
  completedCount,
  pendinTodosCount,
}) {
  return (
    <div>
      <div className="mt-4 text-sm text-gray-600 text-center">
        Total: {totalCount} | Completadas: {completedCount} |
        {completedCount === 0
          ? "Ya las completaste todas!"
          : ` Pendientes: ${pendinTodosCount}`}
      </div>
    </div>
  );
}

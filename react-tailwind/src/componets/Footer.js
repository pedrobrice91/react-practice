export default function Footer({one, two}) {
  return (
    <div>
      <div className="mt-4 text-sm text-gray-600 text-center">
        Total:{one+two} | Completadas: {one} | Pendientes: {two}
      </div>

    </div>
  );
}
export default function Footer({text, completed}) {
  console.log(completed);


  return (
    <div>
      <div className="mt-4 text-sm text-gray-600 text-center">
        Total: {} | Completadas: {} |{" "}
        {/*  === 0 ? "Ya las completaste todas!" : `Pendientes: ${}` */}
      </div>
    </div>
  );
}

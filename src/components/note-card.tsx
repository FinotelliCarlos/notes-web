export function NoteCard() {
  return (
    <button className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative hover:ring-2 outline-none hover:ring-slate-600 text-left focus-visible:ring-2 focus-visible:ring-lime-400">
      <span className="text-sm font-medium text-slate-300">ha 2 dias</span>
      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet natus
        quidem qui nisi officiis quod cupiditate. Ut voluptatum, quo fuga
        repudiandae obcaecati iste, optio illum eius, velit pariatur quis
        totam?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
        natus quidem qui nisi officiis quod cupiditate. Ut voluptatum, quo fuga
        repudiandae obcaecati iste, optio illum eius, velit pariatur quis totam?
      </p>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
    </button>
  );
}
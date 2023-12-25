import MaktabahIcon from '~/components/atoms/maktabah-icon';

export default function Loading() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-5">
      <MaktabahIcon width="40px" height="50px" />
      <p>Sedang memuat, mohon tunggu.</p>
    </div>
  );
}

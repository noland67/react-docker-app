import React, { useRef, useState, useEffect, useCallback } from 'react';

const PixelMaker: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pixelSize, setPixelSize] = useState<number>(32);
  const [imageDataUrl, setImageDataUrl] = useState<string | null>(null);
  const [originalFileName, setOriginalFileName] = useState<string | null>(null);
  const [originalExtension, setOriginalExtension] = useState<string | null>(null);
  const [exportFormat, setExportFormat] = useState<'png' | 'jpeg' | 'webp' | ''>('');
  const [hasRendered, setHasRendered] = useState<boolean>(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const ext = file.name.split('.').pop()?.toLowerCase() || '';
    setOriginalExtension(ext);
    setOriginalFileName(file.name);

    // SVG は exportFormat を空に、それ以外は自動で初期設定
    if (ext === 'png' || ext === 'jpg' || ext === 'jpeg' || ext === 'webp') {
      const defaultFormat = ext === 'jpg' ? 'jpeg' : (ext as 'png' | 'jpeg' | 'webp');
      setExportFormat(defaultFormat);
    } else {
      setExportFormat('');
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setImageDataUrl(reader.result);
        setHasRendered(false);
        setError(null);
      }
    };
    reader.onerror = () => setError('画像の読み込みに失敗しました');
    reader.readAsDataURL(file);
  };

  const renderPixelImage = useCallback(() => {
    if (!imageDataUrl || !canvasRef.current) return;

    const img = new Image();
    img.src = imageDataUrl;

    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const aspectRatio = img.width / img.height;
      const width = pixelSize;
      const height = Math.round(pixelSize / aspectRatio);

      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = width;
      tempCanvas.height = height;
      const tempCtx = tempCanvas.getContext('2d');
      if (!tempCtx) return;

      tempCtx.imageSmoothingEnabled = false;
      tempCtx.drawImage(img, 0, 0, width, height);

      const targetSize = 512;
      canvas.width = targetSize;
      canvas.height = targetSize / aspectRatio;
      ctx.imageSmoothingEnabled = false;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(tempCanvas, 0, 0, canvas.width, canvas.height);

      setHasRendered(true);
    };
  }, [imageDataUrl, pixelSize]);

  useEffect(() => {
    renderPixelImage();
  }, [renderPixelImage]);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas || !originalFileName) return;

    if (!exportFormat) {
      setError('出力形式を選択してください');
      return;
    }

    const baseName = originalFileName.replace(/\.[^/.]+$/, '');
    const mimeType = `image/${exportFormat}`;
    const extension = exportFormat === 'jpeg' ? 'jpg' : exportFormat;

    const link = document.createElement('a');
    link.download = `${baseName}-pixeled.${extension}`;
    link.href = canvas.toDataURL(mimeType);
    link.click();
  };

  return (
    <div className="bg-[#011626] min-h-screen flex flex-col items-center justify-center text-white text-xl font-bold z-[4] relative space-y-6 px-4 pt-6">
      <div className="flex justify-center items-center">
        <img src="/icons/Operation_Payback.svg" alt="Icon" className="w-40 h-40 mb-4" />
        <div className="ml-[.5rem] text-[3rem]">→</div>
        <img src="/icons/Operation_Payback-pixeled.png" alt="Icon" className="w-40 h-40 mb-4" />
      </div>

      <p>Welcome to PixelMaker.</p>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-white file:text-black hover:file:bg-gray-200"
      />

      {imageDataUrl && (
        <>
          <label className="flex flex-col items-center space-y-1">
            <span className="text-sm">Pixel size: {pixelSize}px</span>
            <input
              type="range"
              min={4}
              max={128}
              value={pixelSize}
              onChange={(e) => setPixelSize(Number(e.target.value))}
              className="w-64"
            />
          </label>

          <canvas ref={canvasRef} className="border border-white" />

          {/* 出力形式の選択 */}
          <label className="text-sm">
            Export as:&nbsp;
            <select
              value={exportFormat}
              onChange={(e) => setExportFormat(e.target.value as 'png' | 'jpeg' | 'webp' | '')}
              className="bg-white text-black px-2 py-1 rounded"
            >
              <option value="" disabled>
                {originalExtension === 'svg' ? '出力形式を選択' : 'Choose format'}
              </option>
              <option value="png">PNG</option>
              <option value="jpeg">JPEG</option>
              <option value="webp">WebP</option>
            </select>
          </label>
          {hasRendered && (
            <button
              onClick={handleDownload}
              className="bg-white text-black text-sm font-semibold px-4 py-2 rounded hover:bg-gray-300 transition"
            >
              Download Image
            </button>
          )}
        </>
      )}

      {error && <p className="text-red-400">{error}</p>}
    </div>
  );
};

export default PixelMaker;

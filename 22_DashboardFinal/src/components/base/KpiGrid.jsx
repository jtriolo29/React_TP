function KpiGrid({ children }) {
  // This will wrap around the KpiBlocks which are the children
  return <div className="grid grid-cols-2 gap-4">{children}</div>;
}

export default KpiGrid;

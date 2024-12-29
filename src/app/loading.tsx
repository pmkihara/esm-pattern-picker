import LoadingOverlay from '@/components/atoms/LoadingOverlay'

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return <LoadingOverlay isLoading={true} />
}
